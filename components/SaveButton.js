const SaveButton = ({id, url, storage}) => {
  const handleClick = () => {
    storage.setItem(`GIF${id}`, url);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{color: 'pink', backgroundColor: 'transparent'}}
    >
      {'Save to favorites <3'}
    </button>
  );
};

export default SaveButton;
