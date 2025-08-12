import "./BridalGalleryTab.css";

const BridalGalleryTab = (props) => {
  const { tabDetails, clickTabItem, isActive } = props;
  const { tabId, displayText } = tabDetails;
  const onClickTabItem = () => {
    clickTabItem(tabId);
  };

  const activeTabBtnClassName = isActive ? "active-tab-btn" : "";

  return (
    <li>
      <button
        type="button"
        className={`gal-tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        <span className="bridal-gal-tab">{displayText}</span>
      </button>
    </li>
  );
};

export default BridalGalleryTab;
