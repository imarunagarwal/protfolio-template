import './RightPanel.css';
const RightPanel = ({ email }) => {
  return (
    <div className="rightCont">
      <a className="email" href={`mailto: ${email}`}>
        <p className="email">{email}</p>
      </a>

      <div className="line"></div>
    </div>
  );
};
export default RightPanel;
