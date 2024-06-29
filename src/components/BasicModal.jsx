import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Filter } from "lucide-react";
import PriceRangeSlider from "./PriceRangeSlider";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  searchParams,
  setSearchParams,
  handleFilter,
}) {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setCategory(e.target.value);
    handleFilter(e);
  };

  function handleClearFilters() {
    setSearchParams({
      name: "",
      minPrice: "",
      maxPrice: "",
      page: 1,
      category: "",
    });
    setCategory("");
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        <Filter />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Filters
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <PriceRangeSlider
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <div className="p-2">
              <p className="my-5 text-sm font-bold">Filter by category:</p>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                  name="category"
                >
                  <MenuItem value={"Electronics"}>Electronics</MenuItem>
                  <MenuItem value={"Accessories"}>Accessories</MenuItem>
                  <MenuItem value={"Wearables"}>Wearables</MenuItem>
                  <MenuItem value={"Smart Home"}>Smart Home</MenuItem>
                  <MenuItem value={"Health"}>Health</MenuItem>
                  <MenuItem value={"Home Appliances"}>Home Appliances</MenuItem>
                  <MenuItem value={"Automotive"}>Automotive</MenuItem>
                  <MenuItem value={"dogs"}>dogs</MenuItem>
                </Select>
              </FormControl>
              <button
                onClick={handleClearFilters}
                className="p-3 rounded-md bg-blue-500 mt-5 text-white"
              >
                Clear filters
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
