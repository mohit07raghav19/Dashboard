import { database } from "../Firebase";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
// import { userid } from "./Login";
import { ref, push, child, update, set } from "firebase/database";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [githhubwebdev, setgithubwebdev] = React.useState("");
  const [githhubappdev, setgithubappdev] = React.useState("");
  const [githubownername, setgithubownername] = React.useState("");
  const [githubreponame, setgithubreponame] = React.useState("");
  const [githubblockchain, setgithubblockchain] = React.useState("");
  const [githubdesign, setgithubdesign] = React.useState("");
  const [githubml, setgithubml] = React.useState("");
  const [codeforcesusername, setcodeforcesusername] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    let arrgithubwebdev = githhubwebdev.split("\n");
    let arrgithubappdev = githhubappdev.split("\n");
    let arrgithubblockchain = githubblockchain.split("\n");
    let arrgithubdesign = githubdesign.split("\n");
    let arrgithubml = githubml.split("\n");
    let obj = {
      githhubwebdev: arrgithubwebdev,
      githhubappdev: arrgithubappdev,
      githubownername,
      githubreponame,
      githubblockchain: arrgithubblockchain,
      githubdesign: arrgithubdesign,
      githubml: arrgithubml,
      codeforcesusername,
    };
    const updates = {};
    let uid = localStorage.getItem("uid");
    const pinnedMessagesRef = ref(database, "users/" + uid);
    console.log(uid);
    // updates['/users/'+uid] = obj
    //    update(ref(database), updates).then(
    //     console.log("done")
    //    )
    set(pinnedMessagesRef, obj);
    // console.log(obj)

    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>CP</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Enter Details Regarding Competitve Programming
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Enter CodeForces UserName"
              onChange={(e) => {
                setcodeforcesusername(e.target.value);
              }}
              variant="outlined"
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Web Dev
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Seperate links by hitting enter
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Link to Github projects"
              multiline
              fullWidth
              variant="outlined"
              onChange={(e) => {
                setgithubwebdev(e.target.value);
              }}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              App Dev
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>Appdevtext</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Link to Github projects"
              multiline
              fullWidth
              variant="outlined"
              onChange={(e) => {
                setgithubappdev(e.target.value);
              }}
            />
          </AccordionDetails>
        </Accordion>
        {/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Cybersecurity
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            CyberSectext
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Foss</Typography>
            <Typography sx={{ color: "text.secondary" }}>Fosstext</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Enter Github OwnerName"
              variant="outlined"
              onChange={(e) => {
                setgithubownername(e.target.value);
              }}
            />
            <TextField
              label="Enter Github RepoName"
              variant="outlined"
              onChange={(e) => {
                setgithubreponame(e.target.value);
              }}
            />

            {/* <TextField label="Link to Github projects" multiline fullWidth variant="outlined" /> */}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              BlockChain
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>BCtext</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Link to Github projects"
              multiline
              fullWidth
              variant="outlined"
              onChange={(e) => {
                setgithubblockchain(e.target.value);
              }}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Design</Typography>
            <Typography sx={{ color: "text.secondary" }}>Designtext</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Link to Github projects"
              multiline
              fullWidth
              variant="outlined"
              onChange={(e) => {
                setgithubdesign(e.target.value);
              }}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Machine Learning
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>MLtext</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Link to Github projects"
              multiline
              fullWidth
              variant="outlined"
              onChange={(e) => {
                setgithubml(e.target.value);
              }}
            />
          </AccordionDetails>
        </Accordion>

        {/* <TextField label="GitHub link 2" fullWidth variant="outlined" /> */}
      </Dialog>
    </div>
  );
}
