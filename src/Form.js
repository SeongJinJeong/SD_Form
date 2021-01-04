import React, { useState } from "react";

const Form = ({}) => {
  return (
    <div style={FormStyle}>
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
      }}
    >
      <h1 style={{ margin: 0 }}>홈페이지 제작 문의</h1>
      <h4 style={{ margin: 0, color: "gray" }}>
        아래 양식을 작성해주시면 확인 후 연락드리겠습니다.
      </h4>
    </div>
  );
};

const FormContent = ({}) => {
  const [name, setName] = useState({
    name: "",
    user: "",
    email: "",
    contact: "",
    text: "",
  });

  const handleChange = (e, name) => {
    // console.log(e);
    console.log(name);
    setName({
      ...name,
      name: e.target.value,
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
      }}
    >
      <TextInputs
        text="회사명"
        name={name}
        handleChange={handleChange}
        type={"name"}
        placeHolder={"홍길동컴퍼니"}
      />
      <TextInputs
        text="담당자명"
        name={name}
        handleChange={handleChange}
        type={"user"}
        placeHolder={"홍길동"}
      />
      <TextInputs
        text="이메일"
        name={name}
        handleChange={handleChange}
        type={"email"}
        placeHolder={"abc@mail.com"}
      />
      <TextNumber
        text={"전화번호"}
        name={name}
        handleChange={handleChange}
        type={"contact"}
        placeHolder={null}
      />
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
      }}
    >
      {name}
    </div>
  );
};

const TextInputs = ({ text, name, handleChange, type, placeHolder }) => {
  return (
    <div style={{ display: "flex", margin: "5px 0px", alignItems: "center" }}>
      <FormContentName name={text} />
      <input
        type="text"
        placeholder={placeHolder}
        value={name.type}
        onChange={(event) => {
          handleChange(event, type);
        }}
        style={{
          minWidth: "70%",
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
    <div style={{ display: "flex", margin: "5px 0px", alignItems: "center" }}>
      <FormContentName name={text} />
      <NumberInputBox />
    </div>
  );
};

const NumberInputBox = ({}) => {
  const [numbers, setNumbers] = useState({
    num1: 0,
    num2: 0,
    num3: 0,
  });

  const handleNumberChange = (e, type) => {
    switch (type) {
      case "num1":
        setNumbers({
          ...numbers,
          num1: e.target.value,
        });
        break;
      case "num2":
        setNumbers({
          ...numbers,
          num2: e.target.value,
        });
        break;
      case "num3":
        setNumbers({
          ...numbers,
          num3: e.target.value,
        });
        break;

      default:
        break;
    }
  };
  return (
    <div
      style={{
        width: "70%",
        height: "25px",
      }}
    >
      <input
        type="text"
        value={numbers.num1}
        onChange={(e) => {
          handleNumberChange(e, "num1");
        }}
        style={{
          width: "30%",
          height: "25px",
          borderRadius: "3px",
          border: "1px solid gray",
        }}
      />
      <NumberBoxes
        numbers={numbers}
        handleNumberChange={handleNumberChange}
        type={numbers.num2}
      />
    </div>
  );
};

const NumberBoxes = ({ numbers, handleNumberChange, type }) => {
  console.log(numbers);
  return (
    <input
      type="text"
      value={numbers + type}
      onChange={(e) => {
        handleNumberChange(e, "num1");
      }}
      style={{
        width: "30%",
        height: "25px",
        borderRadius: "3px",
        border: "1px solid gray",
      }}
    />
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
  minHeight: "80%",

  borderRadius: "10px 10px 10px 10px",
};

const FormContentStyle = {};

export default Form;
