import Select from 'react-select';
import "./SelectBox.css";
export default function SelectBox(props) {
    return (
        <Select
            options={props.options}
            className={`theme-select ${props.boxClass}`}
            classNames={{ control: () => 'select2-control' }}
            defaultValue={props.options[0]}
            value={props.options.value}
        />
    )
}