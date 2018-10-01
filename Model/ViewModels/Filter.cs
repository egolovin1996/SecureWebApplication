﻿using System;
namespace Model.ViewModels
{
    public class Filter
    {
        public string Label { get; set; }
        public string Placeholder { get; set; } = "Введите слово или словосочетание";
        public string PropertyName { get; set; }
    }
}
