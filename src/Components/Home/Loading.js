import "./Loading.css";
function Loading(props) {
  return (
    <>
      {props.data === "one" && <div className="lds-hourglass" />}
      {props.data === "two" && <div className="lds-hourglass02" />}
      {props.data === "three" && <div className="lds-hourglass03" />}
    </>
  );
}

export default Loading;
