import Sent from "./sent"
import ErrorSent from "./error_sent"


export default function Alert(props) {
	//console.log(props);
	return (
			<div>
				{props.params.submit == true ? (props.params.submitMessage == 'success'
			? <Sent/>
			: props.params.submitMessage == 'error'
			? <ErrorSent/>
		: null) : null}
			</div>
	)
}
