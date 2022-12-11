<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Base\BaseController;
use App\Http\Requests\NotesRequest;

use App\Models\Notes;

class NotesController extends BaseController
{
    public function __construct()
    {
        $this->setModel(new Notes);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \App\Http\Requests\NotesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function validateRequest(NotesRequest $request)
    {
        return $request->validated();
    }
}
