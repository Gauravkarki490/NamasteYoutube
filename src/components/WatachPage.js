import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";

const WatachPage = () => {
  const [searchParams] = useSearchParams();
  const vId=searchParams.get("v")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
    <div className="px-5">
      <iframe
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/"+vId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ></iframe>
    </div>
    <CommentsContainer/>
        </div>
  );
};

export default WatachPage;
