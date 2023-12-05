import { styled } from "styled-components";

const DivFrame = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 100;
  width: 80vw;
  height: auto;
  overflow: hidden;
  iframe {
    overflow: hidden;
    border-radius: 15px;
    position: relative;
    top: 0;
    left: 0;

    @media (max-width: 480px) {
      width: 100%;
      height: calc(480px * 9 / 16);
    }
    @media (min-width: 481px) and (max-width: 600px) {
      width: 100%;
      height: calc(481px * 9 / 16);
    }
    @media (min-width: 601px) and (max-width: 768px) {
      width: 100%;
      height: calc(601px * 9 / 16);
    }
    @media (min-width: 769px) and (max-width: 991px) {
      width: 100%;
      height: calc(70vw * 9 / 16);
    }
    @media (min-width: 992px) and (max-width: 1024px) {
      width: 100%;
      height: calc(50vw * 9 / 16);
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      width: 100%;
      height: calc(70vw * 9 / 16);
    }
    @media (min-width: 1201px) {
      width: 100%;
      height: calc(70vw * 9 / 16);
    }
  }
`;

export const YouTubeVideo = () => {
  return (
    <DivFrame>
      <iframe
        width="100%"
        height="auto"
        src="https://www.youtube.com/embed/5oA-54imiFo?si=62HUNYS42D10er7o"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </DivFrame>
  );
};
