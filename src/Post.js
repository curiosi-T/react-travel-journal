function Post(props) {
  return (
    <>
      <div className="post">
        <img src={props.item.imageUrl}></img>
        <div className="post--text">
          <div className="post--location">
            <img src="../pin-icon.png"></img>
            <p className="post--country">{props.item.location}</p>
            <a
              className="post--url"
              href={props.item.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on google Maps
            </a>
          </div>
          <h1>{props.item.title}</h1>
          <p className="post--date">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className="post--descr">{props.item.description}</p>
        </div>
      </div>
      <hr className="hline" />
    </>
  );
}

export default Post;
