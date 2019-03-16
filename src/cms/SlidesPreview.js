export const SlidesPreview = props => (
    <div>
      {props.value
        .split(props.field.get("separator", defaultSeparator))
        .map((val, i) => <SlidePreview {...props} key={i} value={val} />)}
    </div>
  );