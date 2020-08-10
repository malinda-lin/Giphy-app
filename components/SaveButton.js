const SaveButton = ({id, url, storage}) => {
  const handleClick = () => {
    storage.setItem(`GIF${id}`, url);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Save it!
      </button>
    </div>
  );
};

export default SaveButton;
