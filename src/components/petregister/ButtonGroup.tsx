import Button from '../../components/baseComponent/Button';

const ButtonGroup = ({ buttons }) => {
  return (
    <div style={{ display: 'flex', marginTop: '30px', gap: '10px' }}>
      {buttons.map((button) => (
        <Button
          key={button.id}
          onClick={button.onClick}
          variant={button.variant}
          shape={button.shape}
          fontSize={button.fontSize}
          margin={button.margin}
          padding={button.padding}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;