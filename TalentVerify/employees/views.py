from django.shortcuts import render
from django.http import HttpResponse

def main(request):
    return HttpResponse("<h1> Hello this is the eemployees app</h1>")
