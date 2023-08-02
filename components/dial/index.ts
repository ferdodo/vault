import { render } from "./template";
import { defineComponent, Ref, ref } from "vue";
import { calculateRotationOffset, Dial } from "../../dial";
import { observeDial, getDial, turnDialLeft, turnDialRight } from "../../dials";

export enum CellType {
	Letter,
	Symbol
}

export const DialComponent = defineComponent({
	props: {
		dialId: {
			type: Number,
			required: true
		}
	},
	setup(props) {
		const dial: Ref<Dial> = ref(getDial(props.dialId));
		const rotationOffset: Ref<number> = ref(calculateRotationOffset(getDial(props.dialId)));

		observeDial(props.dialId).subscribe(function(value) {
			dial.value = value;
			rotationOffset.value = calculateRotationOffset(value);
		});
		
		function getRotation(symbol: string): number {
			const result = Math.floor((360 * (parseInt(symbol)-1)) / dial.value.size);
			return result;
		}

		return {
			dial,
			turnDialLeft,
			turnDialRight,
			getRotation,
			rotationOffset
		};
	},
	render
});
