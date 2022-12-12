<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Base\BaseController;
use App\Http\Requests\CategoriesRequest;
use Illuminate\Http\Request;

use App\Models\Categories;

class CategoriesController extends BaseController
{
    public function __construct()
    {
        $this->setModel(new Categories);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  mixed $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoriesRequest $request)
    {
        // dd($request);
        if(!$this->validateRequest($request)){
            return response($request->errors(), 500);
    }

        if(!$this->getModel()::create($request->all())) {
            return response('Error creating request', 500);
        }

        return response("Successfully created Resource", 200);
    }

    /**
     * Update a resource in the database
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoriesRequest $request, $id)
    {

        if(!$this->validateRequest($request)){
            return response($request->errors(), 500);
        }

        if(!$entity = $this->getModel()::find($id)) {
            return response('Could not find resource', 500);
        }

        if(!$entity->update($request->all())) {
            return response('Error updating request', 500);
        };

        return response('Success', 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \App\Http\Requests\CategoriesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function validateRequest(CategoriesRequest $request)
    {
        return $request->validated();
    }

}
