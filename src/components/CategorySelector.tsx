import { MovieCategory, ALL_CATEGORIES } from "../types/movie";
import styled from "styled-components";

const CheckBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 20px;
`;

const CheckBoxLabel = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 0.75rem 1rem;
  background-color: ${(props) => (props.selected ? 'rgba(169, 169, 169, 0.5)' : '#f0f0f0')};
  border-radius: 1rem;
  border: 2px solid ${(props) => (props.selected ? '#343a40' : '#ccc')};
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  margin-bottom: 15px;

  &:hover {
    background-color: rgba(169, 169, 169, 0.3);
  }
`;

const CheckBoxInput = styled.input`
  display: none;

  &:checked + ${CheckBoxLabel} {
    background-color: rgba(169, 169, 169, 0.5);
    border-color: #343a40;
  }
`;

interface CategorySelectorProps {
  selectedCategories: MovieCategory[];
  onCategoryChange: (category: MovieCategory) => void;
}

export default function CategorySelector({ selectedCategories, onCategoryChange }: CategorySelectorProps) {
  return (
    <div>
      <h2>Kategoriler</h2>
      <CheckBoxWrapper>
        {ALL_CATEGORIES.map(({ label, value }) => (
          <div key={value}>
            <CheckBoxInput
              type="checkbox"
              id={value}
              onChange={() => onCategoryChange(value)}
              checked={selectedCategories.includes(value)}
            />
            <CheckBoxLabel
              htmlFor={value}
              selected={selectedCategories.includes(value)}
            >
              {label}
            </CheckBoxLabel>
          </div>
        ))}
      </CheckBoxWrapper>
    </div>
  );
}
