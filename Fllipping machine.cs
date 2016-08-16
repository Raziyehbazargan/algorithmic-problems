using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ConsoleApplication4
{
    class Program
    {
 
        static void Main(string[] args)
        {

            var list = new List<int> { 7, 2, 1, 4 };
            Solution.Sort(list);

        }
        static class Solution
        {
            public static int i;
            public static int length;
            public static void Sort (List<int> myList)
            {
                int max = 0;
                
                for (var i = 1; i<myList.Count; i++)
                {
                    for (var j = 1; j<myList.Count; j++)
                    {
                        if (myList[j]>myList[max])
                        {
                            max = j;
                        }
                    }
                    length = myList.Count - i;
                    Console.WriteLine("flip " + max);
                    Console.WriteLine("flip " + length);
                }
            }
        }
        
    }
}

