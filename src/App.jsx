import "./App.css";
import Button from "./components/Button/Button";
import Column from "./components/Column/Column";
import Container from "./components/Container/Container";
import InputText from "./components/InputText/InputText";
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
