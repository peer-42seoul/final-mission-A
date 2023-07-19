
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

export default function QuestionSortSelectBox({ name, sort, setSort }: { name: string, sort: string, setSort: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <FormControl >
      <InputLabel id="sort-select-label">Sort</InputLabel>
      <Select
        labelId="sort-select-label"
        id={name}
        value={sort}
        onChange={(e) => {
          setSort(e.target.value as string)
          }}
        label="Sort"
      >
        <MenuItem value={'latest'}>최신순</MenuItem>
        <MenuItem value={'views'}>조회순</MenuItem>
        <MenuItem value={'recommends'}>추천순</MenuItem>
      </Select>
    </FormControl>
  );
}