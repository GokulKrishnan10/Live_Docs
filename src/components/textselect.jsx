export function TextSelect() {
  const Fonts = [
    "Arial",
    "Calibri",
    "Cambria",
    "Times New Roman",
    "Verdana",
    "Tahoma",
    "Georgia",
    "Trebuchet MS",
    "Century Gothic",
    "Garamond",
    "Comic Sans MS",
    "Impact",
    "Courier New",
    "Lucida Sans",
    "Palatino Linotype",
  ];
  function handleInput(event) {
    console.log(event);
  }
  return (
    <div className="select-pop">
      <select>
        {Fonts.map((font) => (
          <option value={font}>{font}</option>
        ))}
      </select>
      <input type="number" onInput={handleInput} />
      <ul>
        <li>
          <strong>B</strong>
        </li>
        <li>I</li>
        <li>U</li>
        <li>L</li>
      </ul>
    </div>
  );
}
