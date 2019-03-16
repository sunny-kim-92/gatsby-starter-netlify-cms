const separator = "\n\n---n\n";

export class SlidesControl extends Component {
  getValue() {
    return this.props.value ? this.props.value : "";
  }

  handleSlideChange(value, i) {
    const newValues = this.getValue().split(separator);
    newValues[i] = value;
    this.props.onChange(newValues.join(separator));
  }

  render() {
    const slides = this.getValue().split(separator);
    const slideControls = slides.map((slideContent, i) => (
      <SlideControl
        {...this.props}
        key={i}
        value={slideContent}
        onChange={value => this.handleSlideChange(value, i)}
      />
    ));
    return <div>{slideControls}</div>;
  }
}