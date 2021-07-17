import React from 'react'
import { useState } from 'react'
import { FormLabel, InputGroup, Button, FormControl, Form } from 'react-bootstrap'
import {AiOutlineSearch} from 'react-icons/ai'
import VideoCard from '../layouts/VideoCard'

export default function LearningHistory() {
    const [state, setState] = useState({
        sortBy: 'recently-accessed',
        filterByCategories: '',
        filterByProgress: '',
        filterByInstructor: ''
    })
    return (
        <div>
            <InputGroup>
                <InputGroup>
                <FormLabel htmlFor="Sort by">Sort by </FormLabel>
                <select value={state.sortBy} onChange={(e) => setState({ sortBy: e.target.value })}>
                    <option value="recently-accessed">Recently Accessed</option>
                    <option value="title:A-Z">Title: A-to-Z</option>
                    <option value="title:Z-A">Title: Z-to-A</option>
                </select>
                </InputGroup>

                <InputGroup>
                <label htmlFor="Filter by">Filter by </label>
                <select value={state.filterByCategories} onChange={(e) => setState({ filterByCategories: e.target.value })}>
                    <option disabled value="">Categories</option>
                    <option value="all-categories">All Categories</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                </select>

                <select value={state.filterByProgress} onChange={(e) => setState({ filterByProgress: e.target.value })}>
                    <option disabled value="">Progress</option>
                    <option value="in-progress">In Progress</option>
                    <option value="not-started">Not Started</option>
                    <option value="completed">Completed</option>
                </select>

                <select value={state.filterByInstructor} onChange={(e) => setState({ filterByInstructor: e.target.value })}>
                    <option disabled value="">Instructor</option>
                    <option value="Adam Eubanks">Adam Eubanks</option>
                    <option value="Al Sweigart">Al Sweigart</option>
                    <option value="Aldin Omerdic">Aldin Omerdic</option>
                </select>
                </InputGroup>

                <Button>Reset</Button>

                <Form style={{ flex: "1", display: "flex" }} >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info"><AiOutlineSearch/></Button>
                </Form>
            </InputGroup>

            
            <VideoCard/>
           
        </div>
    )
}
