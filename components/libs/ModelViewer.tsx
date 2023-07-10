import "@google/model-viewer";

const ModelViewer = ({ altname, source, iosSource }) => {
  return (
    <>
      <model-viewer
        classname="model-viewer"
        style={{ width: 240, height: 280 }}
        disable-zoom="true"
        alt={altname}
        src={source}
        ios-src={iosSource}
        poster="/imgs/egg.gif"
        shadow-intensity="1"
        camera-controls="true"
        disable-tap="true"
        animation-name="run"
        autoplay="true"
        ar="true"
        ar-status="not-presenting"
      ></model-viewer>
    </>
  );
};

export default ModelViewer;
