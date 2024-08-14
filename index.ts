import { createApp, ref } from "vue";
import { render } from "./template";
import { DialComponent } from "./components/dial";
import { dialMatchCount$ } from "./dialMatchCount";
import { dials$ } from "./dials";
import { playClick1, playClick2, playClick3, playClick4 } from "./sounds";
import "cookies-ds";

const app = createApp({
	components: {
		DialComponent,
	},
	setup() {
		const win = ref(false);
		let rotationCount = 0;

		dials$.subscribe(function(/* dials */) {
			//console.log(JSON.stringify(dials, null, 4));
			rotationCount++;
		});

		dialMatchCount$.subscribe(function(count) {
			switch (count) {
				case 1:	
					playClick1();
					break;
				case 2:
					playClick2();
					break;
				case 3:
					playClick3();
					break;
				case 4:
					//@ts-ignore
					if (window.opener?.registerScore) {
						//@ts-ignore
						window.opener.registerScore("vault", rotationCount);
						window.close();
					}
					win.value = true;
					playClick4();
			}
		});

		function share() {
			const date = new Date();
			const year = date.getFullYear();
			const month = ('0' + (date.getMonth() + 1)).slice(-2);
			const day = ('0' + date.getDate()).slice(-2);
			const formattedDate = `${year}/${month}/${day}`;
			let text = `Vault ${formattedDate} - Puzzle réussi avec ${ rotationCount } rotations de cadran.`;

			text += `\n\nhttps://ferdodo.github.io/vault`;
			navigator.clipboard.writeText(text);
		}

		return {
			win,
			share
		};
	},
	render
});

app.mount("body");
