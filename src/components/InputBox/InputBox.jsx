import {
  Container,
  Paper,
  FormLabel,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

const InputBox = ({
  classes,
  endNumber,
  setEndNumber,
  endNumber2,
  setEndNumber2,
  label,
  input,
  label2,
  input2,
  onClick,
  result,
  resultText,
}) => {
  return (
    <Container className={classes.elementContainer}>
      <Paper className={classes.inputField} elevation={5}>
        {input && label && (
          <>
            <FormLabel htmlFor="input1">{label}</FormLabel>
            <TextField
              id="input1"
              type="text"
              placeholder={input}
              value={endNumber}
              className={classes.textField}
              onChange={(e) => setEndNumber(e.target.value)}
            ></TextField>
          </>
        )}
        {label2 && input2 && (
          <>
            <FormLabel htmlFor="input2">{label2}</FormLabel>
            <TextField
              id="input2"
              type="text"
              placeholder={input2}
              value={endNumber2}
              className={classes.textField}
              onChange={(e) => setEndNumber2(e.target.value)}
            ></TextField>
          </>
        )}
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={onClick}
        >
          Go
        </Button>
        <div className={classes.result}>
          <Typography variant="body2">
            {resultText} <strong>{result}</strong>
          </Typography>
        </div>
      </Paper>
    </Container>
  );
};

export default InputBox;
