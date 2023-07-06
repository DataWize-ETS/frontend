import "./form.css";
import { useEffect, useState } from "react";
import api from '../../services/api';
import { toast } from "react-toastify";
import axios from '../../services/api';

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
  const [departments, setDepartments] = useState([]);
  const [majorbenefits, setMajorBenefits] = useState([]);
  const [ideaSources, setIdeaSources] = useState([]);
  const [sourceTypes, setSourceTypes] = useState([]);

  const [departmentsValue, setDepartmentsValue] = useState([]);
  const [majorbenefitsValue, setMajorBenefitsValue] = useState([]);
  const [ideaSourcesValue, setIdeaSourcesValue] = useState([]);
  const [sourceTypesValue, setSourceTypesValue] = useState([]);
  const [email, setEmail] = useState([]);
  const [name, setName] = useState([]);
  const [region, setRegion] = useState([]);
  const [description, setDescription] = useState([]);
  const [summary, setSummary] = useState([]);
  const [dueDate, setDueDate] = useState([]);
  const [cipPex, setCipPex] = useState([]);
  const [currentOrganization, setcurrentOrganization] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [affectEntities, setAffectEntities] = useState([]);;
  const [components, setComponents] = useState([]);
  const [process, setProcess] = useState([]);
  const [priority, setPriority] = useState([]);
  const [estimatedHours, setEstimatedHours] = useState([]);


  useEffect(() => {

    try {
      loadDepartments()
      loadMajorBenefits()
      loadIdeaSources()
      loadSourceTypes()
    } catch (e) {
      console.log('erro')
    }

  }, [departments, majorbenefits, ideaSources, sourceTypes]);

  function loadDepartments() {
    api.get('/department/')
      .then((response) => {
        setDepartments(response.data)
      }).catch(e => {
        toast.error('Não foi possível se conectar')
      })
  }
  function loadMajorBenefits() {
    api.get('/majorbenefits/')
      .then((res) => setMajorBenefits(res.data))
      .catch(e => {
        toast.error('Não foi possível se conectar')
      })
  }
  function loadIdeaSources() {
    api.get('/ideasource/')
      .then((res) => setIdeaSources(res.data))
      .catch(e => {
        toast.error('Não foi possível se conectar')
      })
  }
  function loadSourceTypes() {
    api.get('/sourcetype/')
      .then((res) => setSourceTypes(res.data))
      .catch(e => {
        toast.error('Não foi possível se conectar')
      })
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (departmentsValue == '' || majorbenefitsValue == '' || ideaSourcesValue == '' || sourceTypesValue == '' || email == '' ||
      name == '' || region == '' || description == '' || summary == '' || dueDate == '' || cipPex == '' ||
      currentOrganization == '' || currency == '' || affectEntities == '' || components == '' || process == '' || priority == '' || estimatedHours == '') {
      toast.warning('Fill in all fields')
    } else {

      const token = localStorage.getItem('@bearer');

      const config = {
        headers: { Authorization: token }
      };

      const bodyParameters = {
        "signature": name,
        "departmentId": 1,//departmentsValue,
        "summary": summary,
        "description": description,
        "majorBenefitsid": 1,//majorbenefitsValue,
        "dueDate": "2023-05-25",
        "affectEntities": affectEntities,
        "estimatedHours": estimatedHours,
        "sourceTypeId": 1,//sourceTypesValue,
        "ideaSourceId": 1, //ideaSourcesValue,
        "sprintId": 1,
        "components": components,
        "region": region,
        "cipPex": cipPex,
        "currency": currency,
        "priorityId": priority,
        "statusId": 1, // pending
        "email": email,
      };

      console.log(bodyParameters)

      axios.post(
        '/improvement/',
        bodyParameters,
        config
      ).then((data) => {
        toast.success('Request Send!')
        setDepartmentsValue('')
        setMajorBenefitsValue('')
        setIdeaSourcesValue('')
        setSourceTypesValue('')
        setEmail('')
        setName('')
        setRegion('')
        setDescription('')
        setSummary('')
        setDueDate('')
        setCipPex('')
        setcurrentOrganization('')
        setCurrency('')
        setAffectEntities('')
        setComponents('')
        setProcess('')
        setPriority('')
        setEstimatedHours('')

      })
        .catch(e => console.log(e));

    }
  };

  return (
    <ChakraProvider theme={theme}>
      <form action="" method="post" onSubmit={e => handleSubmit(e)}>
        <div className="row">
          <div className="col-3">
            <FormControl variant="floating" id="first-name">
              <Input type="email" placeholder=" " h={14} className="input" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <FormLabel>Email</FormLabel>
            </FormControl>
          </div>

          <div className="col-2">
            <FormControl id="first-name">
              <Select placeholder="Department" h={14} className="input" id="department" name="department" onChange={(e) => setDepartmentsValue(e.target.value)} value={departmentsValue}>
                {departments.map((department, i) => {
                  return <option key={i} value={department.id}>{department.name}</option>
                })}
              </Select>
            </FormControl>
          </div>

          <div className="col-4">
            <FormControl variant="floating" id="first-name">
              <Input className="input" placeholder=" " h={14} border="" type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name} />
              <FormLabel>Name</FormLabel>
            </FormControl>
          </div>

          <div className="col-3">
            <FormControl id="first-name" variant="floating">
              <Input className="input" placeholder="" h={14} border="" type="text" id="region" name="region" onChange={(e) => setRegion(e.target.value)} value={region} />
              <FormLabel>Region</FormLabel>
            </FormControl>
          </div>
        </div>

        <div className="textarea">
          <div className="textare-input">
            <FormControl id="first-name" variant="floating">
              <Textarea className="input textarea-field" resize="None" h="" type="text" id="description" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
              <FormLabel>Description</FormLabel>
            </FormControl>
          </div>

          <div className="rows">
            <div className="row">
              <div className="col-6">
                <FormControl variant="floating" id="first-name">
                  <Input placeholder=" " h={14} className="input" type="text" id="summary" name="summary" onChange={(e) => setSummary(e.target.value)} value={summary} />
                  <FormLabel>Summary</FormLabel>
                </FormControl>
              </div>

              <div className="col-6">
                <FormControl variant="floating" id="first-name">

                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="date" h={14}
                    className="input" id="dueDate" name="dueDate" onChange={(e) => setDueDate(e.target.value)} value={dueDate}
                  />
                  <FormLabel>Due date</FormLabel>
                </FormControl>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <FormControl variant="floating" id="first-name">
                  <Input placeholder=" " h={14} className="input" type="text" id="cipPex" name="cipPex" onChange={(e) => setCipPex(e.target.value)} value={cipPex} />
                  <FormLabel>CipPex</FormLabel>
                </FormControl>
              </div>

              <div className="col-6">
                <FormControl variant="floating" id="first-name">
                  <Input type="text" placeholder=" " h={14} className="input" onChange={(e) => setcurrentOrganization(e.target.value)} value={currentOrganization} />
                  <FormLabel>Current Organization</FormLabel>
                </FormControl>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-3">
            <FormControl variant="floating" id="first-name">
              <Select placeholder="Source Type" h={14} className="input" id="sourceType" name="sourceType" onChange={(e) => setSourceTypesValue(e.target.value)} value={sourceTypesValue}>
                {sourceTypes.map((sourcetype, i) => {
                  return <option key={i} value={sourcetype.id}>{sourcetype.name}</option>
                })}
              </Select>
            </FormControl>
          </div>

          <div className="col-2">
            <FormControl id="first-name">
              <Select placeholder="Idea Source" h={14} className="input" id="ideaSource" name="ideaSource" onChange={(e) => setIdeaSourcesValue(e.target.value)} value={ideaSourcesValue}>
                {ideaSources.map((ideasource, i) => {
                  return <option key={i} value={ideasource.id}>{ideasource.name}</option>
                })}
              </Select>
            </FormControl>
          </div>

          <div className="col-4">
            <FormControl variant="floating" id="first-name">
              <Input className="input" type="number" placeholder=" " h={14} border="" min="0" id="currency" name="currency" onChange={(e) => setCurrency(e.target.value)} value={currency} />
              <FormLabel>Currency</FormLabel>
            </FormControl>
          </div>

          <div className="col-3">
            <FormControl id="first-name">
              <Select placeholder="Priority" h={14} className="input" id="priority" name="priority" onChange={(e) => setPriority(e.target.value)} value={priority}>
                <option value={1}>Minor</option>
                <option value={2}>Medium</option>
                <option value={3}>Essential</option>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <FormControl variant="floating" id="first-name">
              <Select placeholder="Major Benefits" h={14} className="input" id="majorBenefits" name="majorBenefits" onChange={(e) => setMajorBenefitsValue(e.target.value)} value={majorbenefitsValue}>
                {majorbenefits.map((majorbenefit, i) => {
                  return <option key={i} value={majorbenefit.id}>{majorbenefit.name}</option>
                })}
              </Select>
            </FormControl>
          </div>

          <div className="col-3">
            <FormControl id="first-name" variant="floating">
              <Input type="text" placeholder=" " h={14} className="input" id="affectEntities" name="affectEntities" onChange={(e) => setAffectEntities(e.target.value)} value={affectEntities} />
              <FormLabel>Affects Entities</FormLabel>
            </FormControl>
          </div>

          <div className="col-5">
            <FormControl variant="floating" id="first-name">
              <Input className="input" placeholder=" " h={14} border="" id="components" name="components" onChange={(e) => setComponents(e.target.value)} value={components} />
              <FormLabel>Components</FormLabel>
            </FormControl>
          </div>

          <div className="col-2">
            <FormControl id="first-name" variant="floating">
              <Input type="number" placeholder=" " min={0} h={14} className="input" id="estimatedHours" name="estimatedHours" onChange={(e) => setEstimatedHours(e.target.value)} value={estimatedHours} />
              <FormLabel>Estimated Hours</FormLabel>
            </FormControl>
          </div>

        </div>

        <div className="row-unique">
          <div className="col-3">
            <FormControl variant="floating" id="first-name">
              <Input className="input" placeholder=" " h={14} border="" id="process" name="process" onChange={(e) => setProcess(e.target.value)} value={process} />
              <FormLabel>Process</FormLabel>
            </FormControl>
          </div>
        </div>

        <button type="submit">Send Improvement</button>
      </form>
    </ChakraProvider>
  );
}

export default Form;
