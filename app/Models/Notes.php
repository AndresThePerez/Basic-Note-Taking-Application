<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Notes extends Model
{
    use HasFactory, SoftDeletes;

    public function __construct()
    {
        parent::__construct();
    }

    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'body', 'category_id'];


    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['category'];

    /**
     * Get the category for the blog post.
     */
    public function category()
    {
        return $this->belongsTo(Categories::class);
    }

    public function trashed() {
        return self::all()->filter(function($model) {
            return is_null($model->deleted_at);
        });
    }
}
