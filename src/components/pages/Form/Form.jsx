import "./form.css";
import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  FormLabel,
  Input,
  extendTheme,
  Box,
  Select,
} from "@chakra-ui/react";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e)
  };

  return (
    <ChakraProvider theme={theme}>
      <form action="" method="post" onSubmit={e => handleSubmit(e)}>
        <div className="row">
          <div className="col-3">
            <FormControl variant="floating" id="first-name">
              <Input type="email" placeholder=" " h={14} className="input" id="email" name="email"/>
              <FormLabel>Email</FormLabel>
            </FormControl>
          </div>

          <div className="col-2">
            <FormControl id="first-name">
              <Select placeholder="Department" h={14} className="input" id="department" name="department">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </div>

          <div className="col-4">
            <FormControl variant="floating" id="first-name">
              <Input className="input" placeholder=" " h={14} border="" type="text" id="name" name="name"/>
              <FormLabel>Name</FormLabel>
            </FormControl>
          </div>

          <div className="col-3">
            <FormControl id="first-name">
              <Select placeholder="Region" h={14} className="input" id="region" name="region">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="textarea">
          <div className="textare-input">
            <FormControl id="first-name" variant="floating">
              <Textarea className="input textarea-field" resize="None" h="" type="text" id="description" name="description"/>
              <FormLabel>Description</FormLabel>
            </FormControl>
          </div>

          <div className="rows">
            <div className="row">
              <div className="col-6">
                <FormControl variant="floating" id="first-name">
                  <Input placeholder=" " h={14} className="input" type="text" id="summary" name="summary"/>
                  <FormLabel>Summary</FormLabel>
                </FormControl>
              </div>

              <div className="col-6">
                <FormControl variant="floating" id="first-name">
                  <Input
                    type="email"
                    placeholder=" "
                    h={14}
                    className="input" id="dueDate" name="dueDate"/>
                  <FormLabel>Due date</FormLabel>
                </FormControl>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <FormControl variant="floating" id="first-name">
                  <Input placeholder=" " h={14} className="input" type="text" id="cipPex" name="cipPex"/>
                  <FormLabel>CipPex</FormLabel>
                </FormControl>
              </div>

              <div className="col-6">
                <FormControl variant="floating" id="first-name">
                <Select placeholder="Region" h={14} className="input" id="region" name="region">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-3">
            <FormControl variant="floating" id="first-name">
                <Select placeholder="Source Type" h={14} className="input" id="sourceType" name="sourceType">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </div>

          <div className="col-2">
            <FormControl id="first-name">
              <Select placeholder="Idea Source" h={14} className="input" id="ideaSource" name="ideaSource"> 
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </div>

          <div className="col-4">
            <FormControl variant="floating" id="first-name">
              <Input className="input" type="number" placeholder=" " h={14} border="" min="0" id="currency" name="currency"/>
              <FormLabel>Currency</FormLabel>
            </FormControl>
          </div>

          <div className="col-3">
            <FormControl id="first-name">
              <Select placeholder="Priority" h={14} className="input" id="priority" name="priority">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <FormControl variant="floating" id="first-name">
            <Select placeholder="Major Benefits" h={14} className="input" id="majorBenefits" name="majorBenefits">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </div>

          <div className="col-3">
            <FormControl id="first-name"  variant="floating">
            <Input type="email" placeholder=" " h={14} className="input" id="affectEntities" name="affectEntities"/>
              <FormLabel>Affects Entities</FormLabel>
            </FormControl>
          </div>

          <div className="col-5">
            <FormControl variant="floating" id="first-name">
              <Input className="input" placeholder=" " h={14} border=""  id="components" name="components"/>
              <FormLabel>Components</FormLabel>
            </FormControl>
          </div>

          <div className="col-2">
            <FormControl variant="floating" id="first-name">
              <Input className="input" placeholder=" " h={14} border=""  id="process" name="process"/>
              <FormLabel>Process</FormLabel>
            </FormControl>
          </div>

        </div>

        <div style={{"width":"100%"}}>
          <div className="col-4">
            <FormControl variant="floating" id="first-name">
              <Input type="email" placeholder=" " h={14} className="input" />
              <FormLabel>Current Organization</FormLabel>
            </FormControl>
          </div>

        </div>

        <button type="submit">Send Improvement</button>
      </form>
    </ChakraProvider>
  );
}

export default Form;
