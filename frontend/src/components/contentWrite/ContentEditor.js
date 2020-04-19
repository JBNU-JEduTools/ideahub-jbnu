import React, { useRef, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
//import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import videoImg from '../../images/videoID.png';

const EditorBlock = styled(Responsive)`
  padding-top: 5rem;
`;

const RequiredOption = styled.div`
  color: ${palette.mainColor};
  margin-right: 0.2rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  width: 100%;
`;

const StyledSelect = styled.select`
  padding: 0.5rem;
  width: 100%;
`;

const QuillWrapper = styled.div`
  boder-width: 1px;
  margin-top: 2rem;
  margin-bottom: 1rem;

  .ql-editor {
    padding: 0;
    min-height: 320px;
    line-height: 1.5;
  }
  .ql-editor-ql-blank::before {
    left: 0px;
  }
`;

const NotRequiredOptionHolder = styled.div`
  margin-left: 0.5rem;
  width: 12rem;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const OptionTitleHolder = styled.div`
  width: 12rem;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const OptionBodyHolder = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
`;

const Holder = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  //justify-content: space-between;
  width: 100%;
`;

const VideoApplyTabHolder = styled.div`
  background: ${palette.gray[1]};
  width: 100%;
  padding: 0.8rem;
`;

const ContentEditor = ({
  title,
  body,
  videoURL,
  team,
  onChangeField,
  taggedContest,
  taggedContestID,
  github,
}) => {
  //videoURL 옵션을 보여줄지 결정.
  const [showOption, setShowOption] = useState(false);

  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '작품 소개 입력.',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });

    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  }, [body]);

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  const onChangevideoURL = (e) => {
    onChangeField({ key: 'videoURL', value: e.target.value });
  };

  const onChangeTeam = (e) => {
    onChangeField({ key: 'team', value: e.target.value });
  };

  const onChangeGit = (e) => {
    onChangeField({ key: 'github', value: e.target.value });
  };

  const onChangeStatus = (e) => {
    onChangeField({ key: 'status', value: e.target.value });
  };

  return (
    <EditorBlock>
      <RequiredOption>* 표시된 항목은 필수 입력 항목입니다.</RequiredOption>

      <Holder>
        <NotRequiredOptionHolder className="NotRequired">
          참가 대회
        </NotRequiredOptionHolder>
        <OptionBodyHolder>
          <p style={{ color: 'gray' }}>{taggedContest}</p>
        </OptionBodyHolder>
      </Holder>

      <Holder>
        <RequiredOption>* </RequiredOption>
        <OptionTitleHolder>작품 이름</OptionTitleHolder>
        <OptionBodyHolder>
          <StyledInput
            placeholder="작품 이름"
            onChange={onChangeTitle}
            value={title}
          />
        </OptionBodyHolder>
      </Holder>

      <Holder>
        <RequiredOption>* </RequiredOption>
        <OptionTitleHolder>개발 상태</OptionTitleHolder>
        <OptionBodyHolder>
          <StyledSelect onChange={onChangeStatus}>
            <option value="garbageOption" disabled selected>
              ==선택==
            </option>
            <option value="준비중">준비중</option>
            <option value="개발중">개발중</option>
            <option value="개발 종료">개발 종료</option>
          </StyledSelect>
        </OptionBodyHolder>
      </Holder>

      <Holder>
        <RequiredOption>* </RequiredOption>
        <OptionTitleHolder>팀원</OptionTitleHolder>
        <OptionBodyHolder>
          <StyledInput
            placeholder="홍길동, 철수, 영희..."
            onChange={onChangeTeam}
            value={team}
          />
        </OptionBodyHolder>
      </Holder>

      <Holder>
        <NotRequiredOptionHolder>GitHub</NotRequiredOptionHolder>
        <OptionBodyHolder>
          <StyledInput
            placeholder="GitHub Repository 주소"
            onChange={onChangeGit}
            value={github}
          />
        </OptionBodyHolder>
      </Holder>

      <Holder>
        <NotRequiredOptionHolder>동영상 등록 여부</NotRequiredOptionHolder>
        <OptionBodyHolder>
          <form>
            <label>
              <input
                type="radio"
                name="video"
                onChange={() => {
                  setShowOption(false);
                }}
              />
              미등록
            </label>
            <label>
              <input
                type="radio"
                name="video"
                onChange={() => {
                  setShowOption(true);
                }}
              />
              등록
            </label>
          </form>
        </OptionBodyHolder>
      </Holder>
      {showOption ? (
        <VideoApplyTabHolder>
          <Holder>
            <OptionTitleHolder>유튜브 동영상 ID</OptionTitleHolder>
            <OptionBodyHolder>
              <StyledInput
                placeholder="유튜브 동영상 ID"
                onChange={onChangevideoURL}
                value={videoURL}
              />
              <p style={{ color: palette.mainColor }}>※ 유튜브 동영상 ID란?</p>
              <p>
                아래 이미지와 같이 주소창의 URI를 참고했을 때, 동영상마다
                부여되는 고유의 인식 번호를 뜻합니다.
              </p>
              <img src={videoImg} alter="videoURL infomating image" />
            </OptionBodyHolder>
          </Holder>
        </VideoApplyTabHolder>
      ) : null}
      {/* <hr style={{ width: '100%', margin: '3rem 0' }} /> */}
      <Holder>
        <RequiredOption>*</RequiredOption>
        <OptionTitleHolder>세부 사항</OptionTitleHolder>
      </Holder>
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default ContentEditor;
