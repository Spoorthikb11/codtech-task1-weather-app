function DocumentEditor() {
  const [text, setText] = React.useState("");
  const [documents, setDocuments] = React.useState([]);

  const saveDocument = () => {
    if (text.trim() === "") {
      alert("Please type something before saving.");
      return;
    }

    setDocuments([...documents, text]);
    setText("");
  };

  const deleteDocument = (index) => {
    const updatedDocuments = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocuments);
  };

  return (
    <div className="container">
      <h1>Simple Document Editor</h1>
      <p>Type text, save it, and manage your notes dynamically using React.</p>

      <textarea
        placeholder="Write your document here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <br />
      <button onClick={saveDocument}>Save Document</button>

      {documents.map((doc, index) => (
        <div className="note" key={index}>
          <p>{doc}</p>
          <button
            className="delete-btn"
            onClick={() => deleteDocument(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DocumentEditor />);