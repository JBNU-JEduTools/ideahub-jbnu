import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
//import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const EditorBlock = styled(Responsive)`
  padding-top: 5rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  width: 30rem;
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

const Holder = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40rem;
`;

const ContentEditor = ({ title, body, videoURL, team, onChangeField }) => {
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

  const onChangeTitle = e => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  const onChangetaggedContest = e => {
    onChangeField({ key: 'taggedContest', value: e.target.value });
  };

  const onChangevideoURL = e => {
    onChangeField({ key: 'videoURL', value: e.target.value });
  };

  const onChangeTeam = e => {
    onChangeField({ key: 'team', value: e.target.value });
  };

  const onChangeStatus = e => {
    onChangeField({ key: 'status', value: e.target.value });
  };

  return (
    <EditorBlock>
      <div></div>
      <Holder>
        <div>작품 이름</div>
        <StyledInput
          placeholder="이름"
          onChange={onChangeTitle}
          value={title}
        />
      </Holder>
      <Holder>
        <div>참가 대회</div>
        <select
          onChange={onChangetaggedContest}
          style={{ padding: '0.5rem', width: '30rem' }}
        >
          <option value="garbageOption" disabled selected>
            ==선택==
          </option>
          <option value="2019">2019 작품경진대회</option>
        </select>
      </Holder>
      <Holder>
        <div>상태</div>
        <select
          onChange={onChangeStatus}
          style={{ padding: '0.5rem', width: '30rem' }}
        >
          <option value="garbageOption" disabled selected>
            ==선택==
          </option>
          <option value="준비중">준비중</option>
          <option value="개발중">개발중</option>
          <option value="개발 종료">개발 종료</option>
        </select>
      </Holder>
      <Holder>
        <div>팀원</div>
        <StyledInput
          placeholder="홍길동, 철수, 영희..."
          onChange={onChangeTeam}
          value={team}
        />
      </Holder>
      <Holder>
        <div>유튜브 URL</div>
        <StyledInput
          placeholder="유튜브 영상 URL"
          onChange={onChangevideoURL}
          value={videoURL}
        />
      </Holder>
      <hr style={{ width: '100%', marginBottom: '2rem' }} />
      <div>세부 사항</div>
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default ContentEditor;
