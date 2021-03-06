import React from "react";
import { Row, Col } from "react-bootstrap";
import {

  FormControl,
  TextField,
  Button,
  Stack,
  Paper
} from "@mui/material";
import classes from "./index.module.scss";
import { Prompt } from 'react-router'
import { useHistory } from "react-router";
import { motion } from "framer-motion";

const Voucher = () => {

  let history = useHistory()

  return (
    <>
      <Prompt
        when={true}
        message="Are you sure you want to leave?"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 130 }}

      >
        <Row>
          <Col md={3}></Col>
          <Col md={6} style={{ position: 'relative', height: '300px' }}>
            <Paper elevation={4} sx={{ marginTop: '20px' }}>
              <Stack>
                <Col md={12}>
                  <FormControl fullWidth>
                    <TextField

                      label="Voucher Number"
                      variant="filled"
                    />
                  </FormControl>
                </Col>
                <Col md={12}>
                  <FormControl fullWidth>
                    <TextField
                      type="number"
                      label="Voucher Pin"
                      variant="filled"

                    />
                  </FormControl>
                </Col>
                <Col md={12}>
                  <FormControl fullWidth>
                    <TextField
                      type="number"
                      label="Credit Amount ( Optional)"
                      variant="filled"
                    />
                  </FormControl>
                </Col>
              </Stack>
            </Paper>

            <Col md={12} className={classes.footer} >
              <Button variant="outlined" color="error" onClick={() => history.goBack()}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  float: "right",

                }}
              >
                Confirm
              </Button>
            </Col>
          </Col>
          <Col md={3}></Col>

        </Row>
      </motion.div>
    </>
  )
}

export default Voucher;
