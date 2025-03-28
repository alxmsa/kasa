import apropos from '../datas/apropos.json';
import ToggleButton from './ToggleButton';

function SectionAbout() {
  return (
    <div>
      <div className="section_about">
        <div className="opacity_about"></div>
      </div>
      <ul className="sectionAbout_ul">
        {apropos.map(({ title, content }, index) => (
            <li key={index} className="section_about_li">
                <ToggleButton title={title}>
                <p className="section_about_content">{content}</p>
                </ToggleButton>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default SectionAbout;
