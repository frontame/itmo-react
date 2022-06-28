import {
  PopupCloseIcon,
  PopupContainer,
  PopupContent,
  PopupImage,
  PopupList,
  PopupSection,
  PopupText,
  PopupTextTypeMobile,
  PopupTextTypeTablet,
  PopupTextTypeWeb,
  PopupTitle,
} from './styles';

const Popup = ({ card, closePopup }) => {
  const renderHtml = (items) => {
    if (!items) return '';

    return items.map((item) => {
      if (item.type === 'p') {
        return (
          <PopupText key={item.id}>
            {item.text}
            {renderHtml(item.children)}
          </PopupText>
        );
      }

      if (item.type === 'ul') {
        return (
          <PopupList key={item.id}>
            {item.text}
            {renderHtml(item.children)}
          </PopupList>
        );
      }

      if (item.type === 'li') {
        return (
          <li key={item.id}>
            {item.text}
            {renderHtml(item.children)}
          </li>
        );
      }

      return '';
    });
  };

  return (
    <PopupSection
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closePopup();
        }
      }}
    >
      <PopupContainer>
        <PopupImage src={card.popupImg} />
        <PopupTitle>{card.title}</PopupTitle>
        <PopupContent>
          <PopupTextTypeWeb>{renderHtml(card.webText)}</PopupTextTypeWeb>
          <PopupTextTypeTablet>
            {renderHtml(card.tabletText)}
          </PopupTextTypeTablet>
          <PopupTextTypeMobile>
            {renderHtml(card.mobileText)}
          </PopupTextTypeMobile>
        </PopupContent>
        <PopupCloseIcon
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closePopup();
            }
          }}
        />
      </PopupContainer>
    </PopupSection>
  );
};

export default Popup;
