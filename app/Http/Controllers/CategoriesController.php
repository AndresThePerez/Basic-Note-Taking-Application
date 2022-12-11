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
     * @param  \App\Http\Requests\CategoriesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function validateRequest(CategoriesRequest $request)
    {
        return $request->validated();
    }

}
