import React, { useState } from "react";

const Form = ({}) => {
  return (
    <div style={FormStyle}>
      <button
        onClick={() => {
          alert("닫기 버튼 클릭됨");
        }}
        style={{
          backgroundColor: "white",
          border: "none",
          fontSize: "100%",
          marginLeft: "auto",
          marginRight: "5px",
          marginTop: "5px",
        }}>
        X
      </button>
      <TitleBox />
      <FormContent />
    </div>
  );
};

const TitleBox = ({}) => {
  return (
    <div
      style={{
        display: "block",
        textAlign: "center",
        margin: "25px 0px",
      }}>
      <h1 style={{ margin: 0 }}>홈페이지 제작 문의</h1>
      <h4 style={{ margin: 0, color: "gray" }}>
        아래 양식을 작성해주시면 확인 후 연락드리겠습니다.
      </h4>
    </div>
  );
};

const FormContent = ({}) => {
  const [data, setData] = useState({
    name: "",
    user: "",
    email: "",
    contact: "",
    text: "",
    checkbox: false,
  });

  const handleChange = (e, name, isContact) => {
    console.log(e);
    setData({
      ...data,
      [name]:
        e !== null ? (typeof e === "boolean" ? e : e.target.value) : isContact,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",

        width: "80%",
      }}>
      <TextInputs
        text="회사명"
        data={data}
        handleChange={handleChange}
        type={"name"}
        placeHolder={"홍길동컴퍼니"}
      />
      <TextInputs
        text="담당자명"
        data={data}
        handleChange={handleChange}
        type={"user"}
        placeHolder={"홍길동"}
      />
      <TextInputs
        text="이메일"
        data={data}
        handleChange={handleChange}
        type={"email"}
        placeHolder={"abc@mail.com"}
      />
      <TextNumber
        text={"전화번호"}
        data={data}
        handleChange={handleChange}
        type={"contact"}
        placeHolder={null}
      />
      <TextArea
        text={"상담내용"}
        data={data}
        handleChange={handleChange}
        type={"text"}
        placeHolder={
          "상담내용을 남겨주시면 보다 정확하고 빠른 진행이 가능합니다."
        }
      />
      <SubmitButton data={data} />
    </div>
  );
};

const FormContentName = ({ name }) => {
  return (
    <div
      style={{
        padding: "10px 0px",
        marginRight: "20px",
        minWidth: "20%",
        width: "100px",

        fontSize: "15px",
      }}>
      {name}
    </div>
  );
};

const TextInputs = ({ text, data, handleChange, type, placeHolder }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "5px 0px",
        alignItems: "center",
        width: "80%",
      }}>
      <FormContentName name={text} />
      <input
        type="text"
        placeholder={placeHolder}
        value={data.type}
        onChange={(event) => {
          handleChange(event, type);
        }}
        style={{
          width: "70%",
          height: "25px",
          borderRadius: "3px",
          border: "1px solid gray",
        }}
      />
    </div>
  );
};

const TextNumber = ({ text, name, handleChange, type, placeHolder }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "5px 0px",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}>
      <FormContentName name={text} />
      <NumberInputBox handleChange={handleChange} />
    </div>
  );
};

const NumberInputBox = ({ handleChange }) => {
  const [numbers, setNumbers] = useState({
    num1: null,
    num2: null,
    num3: null,
  });

  const handleNumberChange = (e, type) => {
    setNumbers({
      ...numbers,
      [type]: e.target.value,
    });
    handleChange(
      null,
      "contact",
      `${numbers.num1}-${numbers.num2}-${numbers.num3}`
    );
  };

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "center",

    //     width: "70%",
    //     height: "25px",
    //   }}>
    <>
      <NumberBoxes
        handleNumberChange={handleNumberChange}
        value={numbers.num1}
        type={"num1"}
      />
      {" - "}
      <NumberBoxes
        handleNumberChange={handleNumberChange}
        value={numbers.num2}
        type={"num2"}
      />
      {" - "}
      <NumberBoxes
        handleNumberChange={handleNumberChange}
        value={numbers.num3}
        type={"num3"}
      />
    </>
  );
};

const NumberBoxes = ({ handleNumberChange, value, type }) => {
  // console.log(numbers.num + type);
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        console.log(typeof parseInt(e.target.value));
        console.log(parseInt(e.target.value));
        isNaN(parseInt(e.target.value))
          ? alert("숫자를 입력하세요")
          : handleNumberChange(e, type);
      }}
      style={{
        width: "13%",
        height: "25px",
        borderRadius: "3px",
        border: "1px solid gray",
        margin: "0px 3px",
      }}
      maxLength={type === "num1" ? 3 : 4}
    />
  );
};

const TextArea = ({ text, data, handleChange, type, placeHolder }) => {
  return (
    <div
      style={{
        width: "80%",
        display: "block",
        // flexDirection: "column",
        marginTop: "20px",
        paddingTop: "20px",

        borderTop: "1px dashed gray",
      }}>
      <p style={{ float: "left", marginBottom: "5px", marginTop: 0 }}>{text}</p>
      <textarea
        style={{}}
        value={data.text}
        onChange={(e) => {
          handleChange(e, type);
        }}
        placeholder={placeHolder}
        style={{
          width: "100%",
          height: "80px",
        }}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="checkbox"
          // checked={data.checkbox}
          onChange={(e) => {
            handleChange(!data.checkbox, "checkbox");
            console.log(data.checkbox);
          }}
        />
        <span style={{ fontSize: "70%" }}>개인정보보호정책에 동의합니다.</span>
        <button
          style={{ backgroundColor: "black", color: "white", height: "50%" }}
          onClick={() => {
            alert("개인정보보호정책 버튼을 클릭했습니다.");
          }}>
          개인정보보호정책
        </button>
      </div>
    </div>
  );
};

const SubmitButton = ({ data }) => {
  const combinedText = `회사명은 ${data.name} 이다. 담당자명은 ${
    data.user
  } 이다. 이메일 주소는 ${data.email} 이다. 전화번호는 ${
    data.contact
  } 이다. 상담내용은 ${data.text} 이다. 개인정보보호정책에 ${
    data.checkbox ? "동의" : "비동의"
  } 한다.`;
  return (
    <button
      type="submit"
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "orangered",
        color: "white",

        margin: "20px 0px",

        border: "none",
        fontSize: "100%",
      }}
      onClick={() => {
        alert(combinedText);
      }}>
      상담신청
    </button>
  );
};

const FormStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "white",
  width: "80%",
  maxWidth: "500px",
  // minHeight: "80%",

  borderRadius: "10px 10px 10px 10px",
};

const FormContentStyle = {};

export default Form;
