import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import App from "../App";
import { describe, it, expect, beforeEach } from "vitest";
import { validUser, invalidUser } from "./mockData"; // Importing mock data


vi.mock("../App", () => ({
    ...vi.requireActual("../App"),
    validateForm: vi.fn(() => true),
}));


        describe("App Component", () => {
            beforeEach(() => {
                render(<App />);
            });
            

            it("renders all input fields", () => {
                
                expect(screen.getByRole("textbox", { name: /name/i })).toBeInTheDocument();
                expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
                expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument();
                expect(screen.getAllByLabelText(/Password/i)[0]).toBeInTheDocument();
                expect(screen.getByLabelText(/Confirm password/i)).toBeInTheDocument();
                expect(screen.getByRole("textbox", { name: /Address/i })).toBeInTheDocument();
                expect(screen.getAllByLabelText(/Male/i)[0]).toBeInTheDocument();
                expect(screen.getAllByDisplayValue(/Female/i)[0]).toBeInTheDocument();
                expect(screen.getByRole("combobox")).toBeInTheDocument();
                expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
                
            });

            it("allows the user to enter values", () => {
                
                fireEvent.change(screen.getByRole("textbox", { name: /name/i }), { target: { value: validUser.name } });
                fireEvent.change(screen.getByRole("textbox", { name: /email/i }), { target: { value: validUser.email } });
                fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: validUser.dob } });
                fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: validUser.password } });
                fireEvent.change(screen.getByLabelText(/Confirm password/i), { target: { value: validUser.confirmPassword } });
                fireEvent.change(screen.getByRole("textbox", { name: /Address/i }), { target: { value: validUser.address } });
                fireEvent.click(screen.getAllByLabelText(/Male/i)[0]);
                fireEvent.mouseDown(screen.getByRole("combobox"));
                fireEvent.click(screen.getByText(validUser.country));


                expect(screen.getByRole("textbox", { name: /name/i }).value).toBe(validUser.name);
                expect(screen.getByRole("textbox", { name: /email/i }).value).toBe(validUser.email);
                expect(screen.getByLabelText(/Date of Birth/i).value).toBe(validUser.dob);
                expect(screen.getAllByLabelText(/Password/i)[0].value).toBe(validUser.password);
                expect(screen.getByLabelText(/Confirm password/i).value).toBe(validUser.confirmPassword);
                expect(screen.getByRole("textbox", { name: /Address/i }).value).toBe(validUser.address);
                expect(screen.getAllByLabelText(/Male/i)[0].checked).toBe(true);
                expect(screen.getByRole("combobox", { name: /country/i })).toHaveTextContent(validUser.country);
            });

            it(`validates incorrect input and prevents submission: ${invalidUser[0].error}`, async () => {
                
                fireEvent.change(screen.getByRole("textbox", { name: /name/i }), { target: { value: invalidUser[0].name } });
                fireEvent.change(screen.getByRole("textbox", { name: /email/i }), { target: { value: invalidUser[0].email } });
                fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: invalidUser[0].dob } });
                fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: invalidUser[0].password } });
                fireEvent.change(screen.getByLabelText(/Confirm password/i), { target: { value: invalidUser[0].confirmPassword } });
                fireEvent.change(screen.getByRole("textbox", { name: /Address/i }), { target: { value: invalidUser[0].address } });
                fireEvent.click(screen.getAllByLabelText(/Male/i)[0]);
                fireEvent.mouseDown(screen.getByRole("combobox"));
                fireEvent.click(screen.getByRole("option", { name: invalidUser[0].country }));
                fireEvent.click(screen.getByRole("button", { name: /submit/i }));
                expect(await screen.findByRole("alert")).toHaveTextContent(invalidUser[0].error);    
            });

            it(`validates incorrect input and prevents submission: ${invalidUser[1].error}`, async () => {
                
                fireEvent.change(screen.getByRole("textbox", { name: /name/i }), { target: { value: invalidUser[1].name } });
                fireEvent.change(screen.getByRole("textbox", { name: /email/i }), { target: { value: invalidUser[1].email } });
                fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: invalidUser[1].dob } });
                fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: invalidUser[1].password } });
                fireEvent.change(screen.getByLabelText(/Confirm password/i), { target: { value: invalidUser[1].confirmPassword } });
                fireEvent.change(screen.getByRole("textbox", { name: /Address/i }), { target: { value: invalidUser[1].address } });
                fireEvent.click(screen.getAllByLabelText(/Male/i)[0]);
                fireEvent.mouseDown(screen.getByRole("combobox"));
                fireEvent.click(screen.getByRole("option", { name: invalidUser[1].country }));
                fireEvent.click(screen.getByRole("button", { name: /submit/i }));
                expect(await screen.findByRole("alert")).toHaveTextContent(invalidUser[1].error);    
            });

            it(`validates incorrect input and prevents submission: ${invalidUser[2].error}`, async () => {
                
                fireEvent.change(screen.getByRole("textbox", { name: /name/i }), { target: { value: invalidUser[2].name } });
                fireEvent.change(screen.getByRole("textbox", { name: /email/i }), { target: { value: invalidUser[2].email } });
                fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: invalidUser[2].dob } });
                fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: invalidUser[2].password } });
                fireEvent.change(screen.getByLabelText(/Confirm password/i), { target: { value: invalidUser[2].confirmPassword } });
                fireEvent.change(screen.getByRole("textbox", { name: /Address/i }), { target: { value: invalidUser[2].address } });
                fireEvent.click(screen.getAllByLabelText(/Male/i)[0]);
                fireEvent.mouseDown(screen.getByRole("combobox"));
                fireEvent.click(screen.getByRole("option", { name: invalidUser[2].country }));
                fireEvent.click(screen.getByRole("button", { name: /submit/i }));
                expect(await screen.findByRole("alert")).toHaveTextContent(invalidUser[2].error);    
            });

            it(`validates incorrect input and prevents submission: ${invalidUser[3].error}`, async () => {
                
                fireEvent.change(screen.getByRole("textbox", { name: /name/i }), { target: { value: invalidUser[3].name } });
                fireEvent.change(screen.getByRole("textbox", { name: /email/i }), { target: { value: invalidUser[3].email } });
                fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: invalidUser[3].dob } });
                fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: invalidUser[3].password } });
                fireEvent.change(screen.getByLabelText(/Confirm password/i), { target: { value: invalidUser[3].confirmPassword } });
                fireEvent.change(screen.getByRole("textbox", { name: /Address/i }), { target: { value: invalidUser[3].address } });
                fireEvent.click(screen.getAllByLabelText(/Male/i)[0]);
                fireEvent.mouseDown(screen.getByRole("combobox"));
                fireEvent.click(screen.getByRole("option", { name: invalidUser[3].country }));
                fireEvent.click(screen.getByRole("button", { name: /submit/i }));
                expect(await screen.findByRole("alert")).toHaveTextContent(invalidUser[3].error);    
            });

            it(`validates incorrect input and prevents submission: ${invalidUser[4].error}`, async () => {
                
                fireEvent.change(screen.getByRole("textbox", { name: /name/i }), { target: { value: invalidUser[4].name } });
                fireEvent.change(screen.getByRole("textbox", { name: /email/i }), { target: { value: invalidUser[4].email } });
                fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: invalidUser[4].dob } });
                fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: invalidUser[4].password } });
                fireEvent.change(screen.getByLabelText(/Confirm password/i), { target: { value: invalidUser[4].confirmPassword } });
                fireEvent.change(screen.getByRole("textbox", { name: /Address/i }), { target: { value: invalidUser[4].address } });
                fireEvent.click(screen.getAllByLabelText(/Male/i)[0]);
                fireEvent.mouseDown(screen.getByRole("combobox"));
                fireEvent.click(screen.getByRole("option", { name: invalidUser[4].country }));
                fireEvent.click(screen.getByRole("button", { name: /submit/i }));
                expect(await screen.findByRole("alert")).toHaveTextContent(invalidUser[4].error);    
            });

            


            it("validates and submits the form with correct data", async() => {
                fireEvent.change(screen.getByRole("textbox", { name: /name/i }), { target: { value: validUser.name } });
                fireEvent.change(screen.getByRole("textbox", { name: /email/i }), { target: { value: validUser.email } });
                fireEvent.change(screen.getByLabelText(/Date of Birth/i), { target: { value: validUser.dob } });
                fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: validUser.password } });
                fireEvent.change(screen.getByLabelText(/Confirm password/i), { target: { value: validUser.confirmPassword } });
                fireEvent.change(screen.getByRole("textbox", { name: /Address/i }), { target: { value: validUser.address } });
                fireEvent.click(screen.getAllByLabelText(/Male/i)[0]);
                fireEvent.mouseDown(screen.getByRole("combobox"));
                fireEvent.click(screen.getByRole("option", { name: validUser.country }));

                fireEvent.click(screen.getByRole("button", { name: /submit/i }));
                expect(await screen.findByRole("success")).toHaveTextContent(validUser.success); 

            });
        });
    
