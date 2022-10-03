/**
 * @jest-environment jsdom
 */
import * as React from "react"
import { render, screen, fireEvent, getByText, getByTitle, getByTestId, getByRole } from "@testing-library/react";
import App from "../App";
import Scrollable_courses from "../container/scrollable_courses";
import MockIntersectionObserver from '../MockIntersectionObserver';
window.IntersectionObserver = MockIntersectionObserver;

describe("<Scrollable_courses/>",() => {
    test("", async () => {
      const course_list = renderList();
      const course = course_list.container;
      expect(screen.getByRole("heading")).toHaveTextContent(/Testing/);
      //expect(screen.getAllByRole("button")).toHaveTextContent(/Right/);
      //expect(screen.getAllByRole("button")).toHaveTextContent(/search/);
      
    //   const list_courses = renderList();
    //   const list_course = await list_courses.findByTestId("example")

    //   expect(list_course).toHaveProperty("Courses",{
    //     id: 0,
    //     description:"",
    //     title:""
    //   });

    // });
  })
});

  function renderList() {
    
    return render(<Scrollable_courses/>);
  }