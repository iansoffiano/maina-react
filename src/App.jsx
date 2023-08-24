import "./App.css";
import Button from "./components/Button/Button";
import Column from "./components/Column/Column";
import Container from "./components/Container/Container";
import InputText from "./components/InputText/InputText";
import Checkbox from "./components/RadioCheckBox/Checkbox";
import Row from "./components/Row/Row";
import SelectOption from "./components/SelectOption/SelectOption";
import { itemList } from './contents'

function App() {

	return (
		<>
			<section className="py-8">
				<Container>
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
				</Container>
				<Container>
					<Row>
						<Column lg="6">
							<div className="flex items-center gap-2">
								<Checkbox label="Text label" value="checkbox text" name="checkboxName" checked={true} />
								<Checkbox label="Text label 2" value="checkbox text 2" name="checkboxName2" />
							</div>
						</Column>
					</Row>
				</Container>
			</section>
			<section>
				<br />
				<Container>
					<Row>
						<Column md="6">
							<p>Column 6/12</p>
						</Column>
						<Column md="6">
							<p>Column 6/12</p>
						</Column>

						<Column md="4">
							<p>Column 4/12</p>
						</Column>
						<Column md="4">
							<p>Column 4/12</p>
						</Column>
						<Column md="4">
							<p>Column 4/12</p>
						</Column>
					</Row>
				</Container>
				<br />
			</section>
		</>
	);
}

export default App;
