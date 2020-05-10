class Hello extends React.Component {
  render() {
    const {s1,s2,s3}=this.props;
    const winner={s1===s2}&&{s2====s3}
    return (
      <div>
        <p>{s1} {s2} {s3}</p>
    <p>{winnne ? 'Winner!':"Looser"}</p>
        

      </div>

    )
}