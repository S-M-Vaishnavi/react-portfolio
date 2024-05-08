import React from 'react'
import "./Skills.css";

const Skills = () => {
  return (
    <div id='skills'>
        <h1>Skills</h1>
    <div className="content">
	<div className="profile-skills">
    <div>
		<input type="checkbox" id="sk3"/>
		<label for="sk3"></label>
		<ul className="skills skills3">
			<li className="sk-css"><span>CSS</span></li>
			<li className="sk-htm"><span>HTML</span></li>
			<li className="sk-jav"><span>JS</span></li>
			<li className="sk-react"><span>React</span></li>
			<li className="sk-angular"><span>Angular</span></li>
			<li className="sk-java"><span>Java</span></li>
			<li className="sk-python"><span>Python</span></li>
			<li className="sk-sql"><span>SQL</span></li>
			<li className="more">
				<input type="checkbox" id="more-len"/><label for="more-len"></label>
				<div><span>XHTML</span><span>XSL</span><span>XML</span><span>JSON</span><span>PUG</span><span>SASS</span></div>
			</li>
		</ul>
		</div>
		<div>
			<input type="checkbox" id="sk1"/>
			<label for="sk1"></label>
			<ul className="skills skills1">
				<li className="sk-dis"><span>Design</span></li>
				<li className="sk-pro"><span>Programing</span></li>
				<li className="sk-ani"><span>Animation</span></li>
				<li className="more">
					<input type="checkbox" id="more-con"/><label for="more-con"></label>
					<div><span>PHOTO</span><span>API</span><span>MAPS</span><span>VIDEO</span><span>CHARTS</span><span>RWD</span></div>
				</li>
			</ul>
		</div>
		<div>
		<input type="checkbox" id="sk2"/>
		<label for="sk2"></label>
		<ul className="skills skills2">
			<li className="sk-not"><span>Notepad++</span></li>
			<li className="sk-vs"><span>visual Studio</span></li>
			<li className="more">
				<input type="checkbox" id="more-pro"/><label for="more-pro"></label>
				<div><span>JIRA</span><span>GIT</span></div>
			</li>
		</ul>
		</div>
		
	</div>
</div>
    </div>
  )
}

export default Skills