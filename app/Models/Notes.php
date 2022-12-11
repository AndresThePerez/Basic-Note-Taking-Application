<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Notes extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['note_title', 'note_text', 'category_id'];


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
}
