import React from 'react'
import Form from "next/form";
import {Search} from "lucide-react";
import SearchFormReset from "@/components/SearchFormReset";

const SearchForm = ({query}: { query?: string }) => {

    // const query = 'Test';

    return (
        <Form action="/public" scroll={false} className="search-form">
            <input
                name="query"
                defaultValue=""
                className="search-input"
                placeholder="Search Startups..."
            />

            <div className="flex gap-2">
                {query && <SearchFormReset/>}

                <button type="submit" className="search-btn text-white">
                    {/*S*/}
                    <Search className={"size-5"}/>
                </button>
            </div>
        </Form>
    )
}
export default SearchForm
