export default function Joke(props) {
    return (
      <>
        {props.Setup && <p className="setup">Setup: {props.Setup}</p>}
        <p className="punchline">Punchline: {props.Punchline}</p>
        <hr />
      </>
    )
}