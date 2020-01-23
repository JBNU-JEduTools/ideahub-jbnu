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

const Editor = ({
  title,
  category,
  status,
  date,
  place,
  description,
  onChangeField,
}) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '대회 소개 등 간단한 대회 정보 입력.',
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
        onChangeField({ key: 'description', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = description;
  }, [description]);

  const onChangeTitle = e => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  const onChangecategory = e => {
    onChangeField({ key: 'category', value: e.target.value });
  };

  const onChangeStatus = e => {
    onChangeField({ key: 'status', value: e.target.value });
  };

  const onChangeDate = e => {
    onChangeField({ key: 'date', value: e.target.value });
  };

  const onChangePlace = e => {
    onChangeField({ key: 'place', value: e.target.value });
  };

  return (
    <EditorBlock>
      <div></div>
      <Holder>
        <div>대회 이름</div>
        <StyledInput
          placeholder="제목"
          onChange={onChangeTitle}
          value={title}
        />
      </Holder>
      <Holder>
        <div>카테고리</div>
        <select
          onChange={onChangecategory}
          style={{ padding: '0.5rem', width: '30rem' }}
        >
          <option value="garbageOption" disabled selected>
            ==선택==
          </option>
          <option value="IT">IT</option>
          <option value="others">기타</option>
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
          <option value="접수중">접수중</option>
          <option value="진행중">진행중</option>
          <option value="종료">종료</option>
        </select>
      </Holder>
      <Holder>
        <div>대회 일시</div>
        <StyledInput placeholder="대회 일시" onChange={onChangeDate} />
      </Holder>
      <Holder>
        <div>대회 장소</div>
        <StyledInput placeholder="대회 장소" onChange={onChangePlace} />
      </Holder>
      <hr style={{ width: '100%', marginBottom: '2rem' }} />
      <div>세부 사항</div>
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
