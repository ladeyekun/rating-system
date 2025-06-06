import { FaStar } from 'react-icons/fa';

function Star(props) {
  let isSelected = props.selected;
  const onClick = props.onClick;

  return (
    <div className="star">
      <FaStar onClick={onClick} className={!isSelected ? 'default' : 'clicked'} />
    </div>
  );
}

export default Star;