<?php

namespace App\Http\Controllers\Base;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Casts\Attribute;

class BaseController extends Controller
{

    private $model;

    /**
     * Show the form for creating a new resource.
     *
     * @param  mixed $request
     * @return \Illuminate\Http\Response
     */
    public function store($request)
    {

        if(!$this->validateRequest($request)){
            return $this->failValErrorResponse();
        }

        if(!$this->getModel()::create($request)) {
            return $this->createErrorResponse();
        }

        return $this->successResponse();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if(!$entity = $this->getModel()::get($id)) {
            return $this->showErrorResponse();
        }

        return $entity;
    }

    /**
     * Update a resource in the database
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        if(!$this->validateRequest($request)){
            return $this->failValErrorResponse();
        }

        if(!$entity = $this->getModel()::find($id)) {
            $this->notFoundResponse();
        }

        if(!$entity->update($request)) {
            $this->failUpdateResponse();
        };

        return $this->succesResponse();
    }

    /**
     * Soft Delete a resource in the database
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(!$entity = $this->getModel()::find($id)) {
            $this->notFoundResponse();
        }

        if(!$entity->delete()) {
            $this->failDeleteResponse();
        };

        return $this->succesResponse();
    }

    /**
     * Read all resources in the database
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showAll()
    {
        return $this->getModel()::all();
    }


    /**
     * Soft Delete all resource in the database
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroyAll()
    {
        return $this->getModel()::get()->delete();
    }


    protected function setModel($value) {
        $this->model = $value;
    }

    protected function getModel() {
        return $this->model;
    }
}
