import "./App.css";
import Button from "./components/Button/Button";
import InputText from "./components/InputText/InputText";
import SelectOption from "./components/SelectOption/SelectOption";
import { itemList } from './contents'

function App() {

	return (
		<>
			<div className="flex flex-col justify-center items-center h-full">
				<h1 className="font-bold text-[2rem] text-center">
					Belajar React + Tailwindcss
				</h1>
				<div className="block my-4 w-full">
					<InputText type="text" placeholder="Isi dengan success / failed" labelName="Default Input Text" />
					<InputText type="text" placeholder="Isi dengan success / failed" labelName="Default Input Text" cek="true" />
					<InputText type="text" placeholder="Isi dengan success / failed" labelName="Default Input Text" cek="false" />
				</div>
				<div className="block mb-4 w-full">
					<SelectOption labelName="Select Label" placeHolder="Pilih" options={itemList} />
				</div>
				<div className="block">
					<Button value="Test Parsing props" appereance="primary" />
					<Button value="Ini button secondary" appereance="secondary" />
				</div>
        <div>
        </div>
			</div>
		</>
	);
}

export default App;
