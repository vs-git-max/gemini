import React from "react";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleSubmitFunctions = () => {
    if (input.trim().length !== 0) {
      onSent();
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>This is more than wonderful</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>This is more than wonderfully wonderfull</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>This is more than beautifull</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>This is more than wonderful</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter a prompt here..."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                src={assets.send_icon}
                alt=""
                onClick={() => handleSubmitFunctions()}
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may not be so accurate so please make sure to confirm your
            values.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
